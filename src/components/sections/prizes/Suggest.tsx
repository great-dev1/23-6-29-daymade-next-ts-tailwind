import Button from "@/components/elements/Button";

export default function Suggest() {
    return (
        <section className="px-5 py-15 bg-green-gradient">
            <div className="max-w-[500px] mx-auto text-center">
                <h2 className="mb-3.5 section-title text-white-shadow">
                    Suggest a <span className="text-outline">prize!</span>
                </h2>

                <p className="mb-8 text-xs font-semibold">
                    Have something you’d want the chance to experience? A place
                    you’ve always wanted to go? Let us know!
                </p>

                <textarea
                    className="w-full px-4 py-2 rounded-lg"
                    rows={4}
                ></textarea>

                <Button className="w-[180px] my-6">Submit</Button>
            </div>
        </section>
    );
}
