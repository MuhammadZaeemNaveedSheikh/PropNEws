const CommentSection = () => {
    return (
        <div className="border border-black rounded-lg">
            <form className="max-w-xxx mx-auto p-12">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Comments<span className="text-primary">*</span></label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Explain why you made this product, what was the journey, etc."></textarea>
            </form>
        </div>
    )
}
export default CommentSection