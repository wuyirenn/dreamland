"use client"

import React, { useState, useCallback } from 'react';

import Navbar from '../../components/ui/navbar';
import Cursor from '../../components/ui/cursor';

const TermsAndPrivacyPage = () => {
    const [isActive, setIsActive] = useState(false);
    const [radius, setRadius] = useState(20);

    const handleOver = useCallback((n: number) => {
        setIsActive(true);
        setRadius(n);
    }, []);

    const handleLeave = useCallback((n: number) => {
        setIsActive(false);
        setRadius(n);
    }, []);

    return (
        <div className="w-screen min-h-screen bg-white overflow-hidden z-[250]">
            <div onMouseOver={()=>handleOver(46)} onMouseLeave={()=>handleLeave(22)}>
                <Navbar handleMusic={() => {}} isPlaying={false} />
            </div>
            
            <div className="flex flex-col items-center justify-center min-h-screen py-20">
                <div 
                    className="text-left p-8 w-xscard sm:w-smcard md:w-card mx-auto"
                    onMouseOver={() => handleOver(46)}
                    onMouseLeave={() => handleLeave(22)}
                >
                    {/* Privacy Policy Section */}
                    <div className="mb-16">
                        <div className="text-2xl sm:text-3xl md:text-4xl text-stone-600 font-bold mb-10">Friend of a Friend App</div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl text-stone-600/95 font-bold mb-6">Privacy Policy</h1>
                        <div className="text-xs sm:text-sm md:text-base text-stone-500 space-y-4">
                            <p>Last updated: {new Date().toLocaleDateString()}</p>
                            <p>{`1. Our app connects you with friends of friends based on your location, enhancing your social discovery experience. When you opt in, Friend of a Friend collects your phone number, name, and location.`}</p>
                            <p>{`2. You can expect to receive SMS messages strictly for one-time password (OTP) verification to secure your account.`}</p>
                            <p>{`3. Location data is used by our algorithm to match you with friends of friends nearby, and is not disclosed to any third party.`}</p>
                            <p>{`4. By accessing or using the service, you agree to be bound by these Terms.`}</p>
                            <p>{`5. If you have any questions or concerns, or would like to opt-out, please contact us at wuyirenn@gmail.com. We respect your privacy and data and will delete your data completely upon request.`}</p>
                        </div>
                    </div>

                    {/* Terms and Conditions Section */}
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl text-stone-600/95 font-bold mb-6">Terms and Conditions</h1>
                        <div className="text-xs sm:text-sm md:text-base text-stone-500 space-y-4">
                            <p>{`1. Our app allows users to connect with friends of friends based on location. You may only use the Service for lawful, personal, and non-commercial purposes.`}</p>
                            <p>{`2. You agree NOT to: Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code or underlying structure of the Service; Copy, distribute, modify, or create derivative works based on the Service without prior written consent; Interfere with or disrupt the operation of the Service or its servers; Use the Service for any unlawful, harmful, or fraudulent activity.`}</p>
                            <p>{`3. The Service requires access to your device's location and phone number to function properly. By using the Service, you consent to the collection and use of your data as outlined in our Privacy Policy.`}</p>
                            <p>{`4. The Service is provided "as is" and "as available" without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service.`}</p>
                            <p>{`5. We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice, if you violate these Terms.`}</p>
                            <p>{`6. For any questions regarding these Terms, please contact us at wuyirenn@gmail.com.`}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Cursor isActive={isActive} radius={radius} />
        </div>
    );
};

export default TermsAndPrivacyPage;