import { useState, useEffect, useRef } from "react";
import { Activity, Camera, Zap } from "lucide-react";

const RepBotComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const iframeRef = useRef(null);
    const processedExercises = useRef(new Map());
    
    const addExercise = (exerciseData) => {
        // Add your exercise logging logic here
        console.log("Exercise logged:", exerciseData);
    };
    
    useEffect(() => {
        const handleMessage = (event) => {
            if (
                event.origin !== "https://render-repbot.vercel.app" && 
                event.origin !== "https://render-repbot.onrender.com"
            ) {
                return;
            }
            
            if (event.data && event.data.type === "exerciseCompleted") {
                const { exerciseType, repCount, timestamp } = event.data;
                const exerciseTimestamp = timestamp || new Date().toISOString();
                
                const exerciseKey = `${exerciseType}-${repCount}-${exerciseTimestamp}`;
                
                if (!processedExercises.current.has(exerciseKey)) {
                    addExercise({
                        exerciseType: exerciseType,
                        count: repCount,
                        timestamp: exerciseTimestamp
                    });
                    
                    processedExercises.current.set(exerciseKey, true);
                    
                    console.log(`Exercise logged: ${exerciseType}, ${repCount} reps at ${exerciseTimestamp}`);
                    
                    if (processedExercises.current.size > 50) {
                        const entries = Array.from(processedExercises.current.entries());
                        entries.slice(0, entries.length - 50).forEach(([key]) => {
                            processedExercises.current.delete(key);
                        });
                    }
                }
            }
        };
        
        window.addEventListener("message", handleMessage);
        
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);
    
    useEffect(() => {
        const checkLocalStorageForExercises = () => {
            try {
                const repbotExerciseKey = "repbot_lastExercise";
                const storedExercise = localStorage.getItem(repbotExerciseKey);
                
                if (storedExercise) {
                    const exerciseData = JSON.parse(storedExercise);
                    const exerciseTimestamp = exerciseData.timestamp || new Date().toISOString();
                    const exerciseKey = `${exerciseData.type}-${exerciseData.count}-${exerciseTimestamp}`;
                    
                    if (!processedExercises.current.has(exerciseKey) && !exerciseData.processed) {
                        addExercise({
                            exerciseType: exerciseData.type,
                            count: exerciseData.count,
                            timestamp: exerciseTimestamp
                        });
                        
                        localStorage.setItem(repbotExerciseKey, JSON.stringify({
                            ...exerciseData,
                            processed: true
                        }));
                        
                        processedExercises.current.set(exerciseKey, true);
                        console.log(`Exercise from localStorage logged: ${exerciseData.type}, ${exerciseData.count} reps at ${exerciseTimestamp}`);
                    }
                }
            } catch (error) {
                console.error("Error checking localStorage for exercises:", error);
            }
        };
        
        checkLocalStorageForExercises();
        
        const interval = setInterval(checkLocalStorageForExercises, 2000);
        
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="flex flex-col gap-y-6 bg-white">
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-black p-3 rounded-lg">
                        <Activity className="text-white" size={32} />
                    </div>
                    <div>
                        <h3 className="makova-h2 text-black">RepBot</h3>
                        <p className="makova-body text-gray-700">Powered by RapidRoutines AI</p>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-md p-4 border-2 border-gray-200 text-center">
                    <Camera className="text-black mx-auto mb-2" size={24} />
                    <h4 className="makova-h4 text-black mb-1">AI Vision</h4>
                    <p className="makova-body text-gray-700">Advanced pose detection</p>
                </div>
                <div className="bg-white rounded-md p-4 border-2 border-gray-200 text-center">
                    <Zap className="text-black mx-auto mb-2" size={24} />
                    <h4 className="makova-h4 text-black mb-1">Real-time</h4>
                    <p className="makova-body text-gray-700">Instant rep counting</p>
                </div>
                <div className="bg-white rounded-md p-4 border-2 border-gray-200 text-center">
                    <Activity className="text-black mx-auto mb-2" size={24} />
                    <h4 className="makova-h4 text-black mb-1">Form Check</h4>
                    <p className="makova-body text-gray-700">Technique feedback</p>
                </div>
            </div>

            <div className="iframe-container relative w-full h-[700px] bg-white shadow-2xl border-2 border-gray-200">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10">
                        <div className="flex flex-col items-center text-center">
                            <div className="h-12 w-12 loading-spinner rounded-full border-4 border-black border-t-transparent"></div>
                            <p className="mt-4 makova-h4 text-black">Loading RepBot...</p>
                            <p className="mt-2 makova-body text-gray-600">The AI model may take 1-2 minutes to initialize</p>
                        </div>
                    </div>
                )}
                
                <iframe 
                    ref={iframeRef}
                    src="https://render-repbot.vercel.app/" 
                    className="h-full w-full border-0"
                    title="RepBot AI Exercise Counter"
                    onLoad={() => {
                        setIsLoading(false);
                        processedExercises.current.clear();
                    }}
                    allow="camera; microphone; accelerometer; gyroscope; fullscreen"
                    allowFullScreen
                    style={{ borderRadius: '0.75rem' }}
                />
            </div>



        </div>
    );
};

export default RepBotComponent;
