import './CTAButton.css'

export default function CTAButton({message}) {

    return (
        <button className="bg-nier-400 text-nier-50 px-4 py-2 rounded-4xl button" >{message}</button>
    )
}