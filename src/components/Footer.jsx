import { AiOutlineFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

export default function Footer() {
    return (
        <footer className="bg-blue text-white p-3 col-lg-12 col-md-12">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <div className="d-flex justify-content-start">
                        <h2 className="fs-5">Rua Joãzinho Aparecido, 345 - São Paulo</h2>
                    </div>
                    <div className="d-flex justify-content-start">
                        <h2 className="fs-5">Telefone: 11 3457-6544</h2>
                    </div>
                </div>

                <div className="d-flex justify-content-end gap-5">
                    <AiOutlineMail className="text-icon fs-3" />
                    <AiOutlineFacebook className="text-icon fs-3" />
                    <AiFillInstagram className="text-icon fs-3" />
                    <AiFillLinkedin className="text-icon fs-3" />
                </div>
            </div >
        </footer >
    )
}