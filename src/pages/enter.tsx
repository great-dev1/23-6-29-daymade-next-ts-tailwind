import Layout from "@/Layout";
import Intro from "@/components/sections/enter/Intro";
import Form from "@/components/sections/enter/form";
import Prizes from "@/components/sections/enter/prizes";

export default function Enter() {
    return (
        <Layout>
            <Intro />
            <Form />
            <Prizes />
        </Layout>
    );
}
