import Layout from "@/Layout";
import Intro from "@/components/sections/enter/Intro";
import Form from "@/components/sections/enter/Form";
import Prizes from "@/components/sections/enter/Prizes";

export default function Enter() {
    return (
        <Layout>
            <Intro />
            <Form />
            <Prizes />
        </Layout>
    );
}
