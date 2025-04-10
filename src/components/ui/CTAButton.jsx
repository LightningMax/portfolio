import './CTAButton.css'

export default function CTAButton({message}) {

    return (
        <button className="bg-nier-400 text-2xl text-center font-general text-nier-50 px-4 py-4 rounded-4xl button" >{message}</button>
    )
}