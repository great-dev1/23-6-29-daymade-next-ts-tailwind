export default function GetToKnow() {
    return (
        <section className="container mx-auto px-5">
            <div className="py-8 border-t-2 border-lightgray">
                <div className="grid grid-cols-12 gap-x-3 gap-y-6">
                    <h2 className="col-span-12 md:col-span-6 self-start section-title text-green-leftline">
                        We&apos;d love to get to know{" "}
                        <span className="text-outline">You!</span>
                    </h2>

                    <p className="col-span-12 md:col-span-6 paragraph">
                        Don&apos;t forget to tag us in your winning story or
                        prize win to be featured on the winners wall! Follow our
                        socials using the links below.
                    </p>
                </div>
            </div>
        </section>
    );
}
