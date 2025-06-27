const Disclaimer = () => {
    return (
        <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-xl text-yellow-800">
            <h3 className="text-md font-semibold mb-2">⚠️ Disclaimer & Notice</h3>
            <ul className="text-sm list-disc pl-5 space-y-1">
                <li>This application is provided <span className="font-semibold">as is</span>. By using it, you agree to the following:</li>
                <li>The app is for general use only and does not provide professional, legal, financial, or medical advice.</li>
                <li>No guarantee of error-free or uninterrupted operation. Bugs, outages, or data loss may occur.</li>
                <li>The developer is <span className="font-semibold">not responsible</span> for any direct or indirect damages, data loss, or third-party claims.</li>
                <li>You are solely responsible for the security and backup of any data shared or stored via the app.</li>
                <li>The app may be updated, restricted, or discontinued at any time without notice.</li>
            </ul>
            <p className="mt-3">By continuing to use the app, you accept these terms.</p>
        </div>
    );
};

export default Disclaimer;