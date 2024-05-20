import { useMemo, useState } from "react";
import BlogCard from "../../../components/cards/companyblog";

const CompanyDetail = () => {
  const [filter, setFilter] = useState(null);

  const blogs = useMemo(() => {
    return [


      {
        companylogo: "src/assets/images/CompanyLogo.svg",
        company: "Innovators",
      },

    ];
  }, []);

  return (
    <section className="mx-auto max-w-[776px] space-y-8 border-b border-black">
      <div className="my-5 flex justify-center">
        <BlogCard {...blogs[0]} />
      </div>
    </section>

  );
};

export default CompanyDetail;
