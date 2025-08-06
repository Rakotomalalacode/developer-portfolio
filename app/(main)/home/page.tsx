import SectionFive from "@/components/model/SectionFive"
import SectionFour from "@/components/model/SectionFour"
import SectionOne from "@/components/model/SectionOne"
import SectionThree from "@/components/model/SectionThree"
import SectionTow from "@/components/model/SectionTow"

const ScreenHomeONe = () => {
    return (
        <div className="m-auto w-[95%] font-Montserrat p-7 pt-12 flex flex-col gap-12">
            <SectionOne />
            <div id="apropos">
                <SectionTow />
            </div>
            <div id="competence">
                <SectionThree />
            </div>
            <div id="projets-top">
                <SectionFour />
            </div>
            <div id="me-contacter">
                <SectionFive />
            </div>
        </div>
    )
}

export default ScreenHomeONe