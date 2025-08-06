import SectionTowLeft from "./SectionTowleft"
import SectionTowRigth from "./SectionTowRigth"

const SectionTow = () => {
    return (
        <div className="relative">
            <div className="block z-20 relative lg:flex flex-row-reverse justify-between">               
                <SectionTowLeft />
                <SectionTowRigth />
            </div>
            <svg className="absolute skew-y-12 z-0 -inset-x-0.5 -top-8 size-full  stroke-white/20 stroke-[2] [mask-image:radial-gradient(white,transparent_70%)]"><defs><pattern id="«r2»" viewBox="0 0 64 64" width="52" height="52" patternUnits="userSpaceOnUse" x="0" y="0"><path d="M64 0H0V64" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#«r2»)"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="469" y="469"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="209" y="417"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="105" y="157"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="365" y="157"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="261" y="209"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="1" y="261"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="313" y="261"></rect></svg>
        </div>
    )
}

export default SectionTow