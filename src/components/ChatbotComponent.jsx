import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const ChatbotComponent = () => {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [chatEnded, setChatEnded] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const iframeRef = useRef(null);
    
    const conversationId = searchParams.get('conversationId');
    const currentConversation = useRef([]);
    
    const handleChatEnd = () => {
        if (chatEnded) return; 
        
        if (currentConversation.current.length > 0) {
            console.log("Saving chat conversation:", currentConversation.current);
            setChatEnded(true);
        }
    };
    
    useEffect(() => {
        const loadPreviousConversation = async () => {
            if (!conversationId || !iframeLoaded || !iframeRef.current) return;
            
            // Add your chat history loading logic here if needed
            console.log("Loading conversation for ID:", conversationId);
        };
        
        loadPreviousConversation();
    }, [conversationId, iframeLoaded]);
    
    useEffect(() => {
        return () => {
            handleChatEnd();
        };
    }, []);
    
    useEffect(() => {
        const allowedOrigins = [
            "https://render-chatbot-di08.onrender.com",
            "https://render-chatbot.vercel.app",
            "https://render-chatbot.onrender.com"
        ];
        
        const handleMessage = (event) => {
            if (!allowedOrigins.includes(event.origin)) {
                return;
            }
            
            if (event.data && event.data.type === "chatMessage") {
                const { role, content } = event.data;
                
                if (content) {
                    currentConversation.current.push({
                        role,
                        content,
                        timestamp: new Date().toISOString()
                    });
                    
                    console.log("Received chat message:", { role, content });
                }
            } else if (event.data && event.data.type === "chatEnded") {
                handleChatEnd();
            }
        };
        
        window.addEventListener("message", handleMessage);
        
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <div className="flex flex-col gap-y-6 bg-white">
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-black p-3 rounded-lg">
                        <MessageSquare className="text-white" size={32} />
                    </div>
                    <div>
                        <h3 className="makova-h2 text-black">ChatBot</h3>
                        <p className="makova-body text-gray-700">Powered by RapidRoutines AI</p>
                    </div>
                </div>
            </div>

            <div className="iframe-container relative w-full h-[700px] bg-white shadow-2xl border-2 border-gray-200">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10">
                        <div className="flex flex-col items-center text-center">
                            <div className="h-12 w-12 loading-spinner rounded-full border-4 border-black border-t-transparent"></div>
                            <p className="mt-4 makova-h4 text-black">Loading ChatBot...</p>
                            <p className="mt-2 makova-body text-gray-600">Connecting to AI assistant</p>
                        </div>
                    </div>
                )}
                
                <div className="h-full w-full p-0">
                    <iframe 
                        ref={iframeRef}
                        src="https://render-chatbot-di08.onrender.com" 
                        className="h-full w-full border-0"
                        onLoad={() => {
                            setIsLoading(false);
                            setIframeLoaded(true);
                            setChatEnded(false);
                            
                            if (!conversationId) {
                                currentConversation.current = []; 
                            }
                        }}
                        title="Chatbot Interface"
                        style={{ borderRadius: '0.75rem' }}
                    ></iframe>
                </div>
            </div>
            
            <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                    <p className="makova-body text-gray-700">
                        <strong>Pro Tip:</strong> Ask specific questions about form, routines, or progression for the best guidance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChatbotComponent;
