import Layout from "@/Layout";
import Categories from "@/components/sections/prizes/Categories";
import Banner from "@/components/sections/prizes/Banner";
import Prizes from "@/components/sections/prizes/Prizes";
import Suggest from "@/components/sections/prizes/Suggest";
import Description from "@/components/sections/prizes/Description";

export default function Enter() {
    return (
        <Layout>
            <Categories />
            <Banner />
            <Prizes />
            <Suggest />
            <Description />
        </Layout>
    );
}
