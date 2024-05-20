import { useMemo, useState } from "react";
import PrimaryBlogCard from "../../../../components/cards/primaryblog2";
import BlogCard from "../../../../components/cards/blog2";

const News = () => {
  const [filter, setFilter] = useState(null);

  const blogs = useMemo(() => {
    return [
      {
        title:
          "TON Memelandia Is Here! Recognizing the Importance of Community-Driven…",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
      },
      {
        title: "TON Memelandia Is Here! Recognizing the Importance of Community-Driven…",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
      },

      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
        companylogo:"src/assets/images/CompanyLogo.svg",
        company:"TON Innovators",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
        company:"TON Innovators",
        companylogo:"src/assets/images/CompanyLogo.svg",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
        companylogo:"src/assets/images/CompanyLogo.svg",
        company:"TON Innovators",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
        companylogo:"src/assets/images/CompanyLogo.svg",
        company:"TON Innovators",
      },
      {
        title: "TON Innovators: GoMining",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.",
        date: "2021-08-12",
        category: "news",
        image: "https://placehold.it/600x400",
        estimated_time: "5 min read",
        companylogo:"src/assets/images/CompanyLogo.svg",
        company:"TON Innovators",
      },
      
    ];
  }, []);

  return (
    <section className="space-y-8 mx-4 md:mx-8 lg:mx-12">
      
      <div className="flex lg:flex-nowrap flex-wrap m-5">
        <PrimaryBlogCard {...blogs[0]} />
        <PrimaryBlogCard {...blogs[1]} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 m-5">
  {blogs.map((blog2, index) => {
    if (index !== 0 && index !== 1) return <BlogCard key={index} {...blog2} />;
    return null;
  })}
</div>

    </section>
  );
};

export default News;
