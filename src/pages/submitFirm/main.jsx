import HeadSubmit from "./headsubmit"
import SubmitNav from "./submitnav"
import CompanyForm from "./companyform"
import OwnerForm from "./ownerform"
import CommentSection from "./comments"
import SubmitSection from "./submitbutton"

const SubmitFirm = () => {
    return (
        <div>
            <HeadSubmit />
            <SubmitNav />
            <CompanyForm />
            <div className="py-8">
                <OwnerForm />
            </div>
            <div className="py-8">
                <CommentSection />
            </div>
            <div className="py-8">
                <SubmitSection />
            </div>

        </div>
    )
}

export default SubmitFirm