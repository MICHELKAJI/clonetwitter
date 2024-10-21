
import iconGif from "../images/Gif.svg";
import iconMedia from "../images/Media.svg";
import iconPoll from "../images/Poll.svg";
import iconSchdule from "../images/Schedule.svg";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";






function TwitterEditor({ value, onchang, onSubmit, click }) {

    return (
        <>
            <div className="tweet-editor">
                <div> <Link to='/profile?postImages=src/images/profile.png&names=Michel&handle=names'><img src={profile} alt="profile" /></Link></div>

                <div className="tweet-editor-form">
                    <form onSubmit={onSubmit}>
                        <textarea className="tweet-editor-input" rows="4" cols="50" value={value} onChange={onchang} placeholder=" What's happening" ></textarea>
                        <div className="tweet-editor-buttons">
                            <TweeterEditorAction onClickImage={click} />

                            <div>
                                <button className="button" type="submit">Twitter</button></div>

                        </div>
                    </form>
                </div>
            </div>
        </>)
}
export function TweeterEditorAction({ onClickImage }) {
    return <div className="tweet-editor-actions">
        <img src={iconGif} onClick={onClickImage} alt="Edit icon" />
        <img src={iconMedia} alt="Edir icon" />
        <img src={iconPoll} alt="Edit icon" />
        <img src={iconSchdule} alt="Edit icon" />

    </div>
}

export default TwitterEditor;