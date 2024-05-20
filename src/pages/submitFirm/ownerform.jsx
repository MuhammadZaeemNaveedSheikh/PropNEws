const OwnerForm = () => {
    return (
        <div className="border border-black rounded-lg">
            <form className="max-w-xxx mx-auto p-12">


                <div className="mb-5">
                    <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" id="user_avatar_help">Please Upload Owner ID<span className="text-primary">*</span></div>
                    <div className="mt-1 text-sm text-slate-400 dark:text-gray-700 text-xs" id="user_avatar_help">Recommended size: 1270x760px.</div>
                    <div className="mt-1 text-sm text-slate-400 dark:text-gray-700 text-xs mb-2" id="user_avatar_help">Upload 3 images to show in the gallery.</div>

                    <div className="space-y-6">


                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border border-black rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800 dark:bg-transparent hover:bg-gray-100 dark:border-black dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <p class="text-xs text-gray-500 dark:text-gray-400 font-light font-poppins">Upload ID Image 1 *</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border border-black rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800 dark:bg-transparent hover:bg-gray-100 dark:border-black dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <p class="text-xs text-gray-500 dark:text-gray-400 font-light font-poppins font-light">Upload Proof of Address Image 2</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-20 border border-black rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800 dark:bg-transparent hover:bg-gray-100 dark:border-black dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <p class="text-xs text-gray-500 dark:text-gray-400 font-poppins font-light">Upload Proof of business ownership Image 3</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default OwnerForm;
