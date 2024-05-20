const SubmitSection = () => {
    return (
        <div className="border border-black rounded-lg">
            <form className="max-w-xxx mx-auto p-12">
                <label for="message" class="block mb-2 text-xs font-medium text-slate-200 dark:text-white">Ready to submit your Firm to our Forum? Make sure to go over your submission data again and verify that everything is correct. Most submissions are approved within 24 hours. Our community also receives updates via Email on new approvals which can be great for visibility! Firms must get 25 up votes to get listed on the aggregator. <span className="text-primary">*</span></label>
                <p className="text-primary text-xs space-y-5 mb-2">*Please complete all required fields to proceed*</p>
                <button type="submit" className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Please Complete Form</button>

            </form>
        </div>
    )
}
export default SubmitSection