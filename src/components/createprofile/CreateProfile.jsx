import { useState } from "react";
import style from './styles.module.css';

function CreateProfile() {
    const [userName, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [bio, setBio] = useState("");

    function handleSubmit() {
        if (userName && fullName) {
            onSubmit({ userName, fullName, bio});
        }
    }
    return (
        <div className={style.create-profile}>
            <h2>Create your profile</h2>
            <div className={style.profile-picture}>
                <img src="profile-pic-placeholder.png" alt="Profile" />
                <button className={style.update-picture-btn}>Update Picture</button>
            </div>
            <div className="input-group">
                <label>Username</label>
                <div className={style.username-input}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <span>@Swst.vercel</span>
                </div>
            </div>
            <div className={style.input-group}>
                <label>Full name</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>
            <div className={style.input-group}>
                <label>Bio</label>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Say something about yourself..."
                ></textarea>
            </div>
            <button className={style.continue-btn} onClick={handleSubmit} disabled={!username || !fullName}>
                Continue
            </button>
            <p className={style.terms}>
                By connecting your wallet, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </p>
        </div>
    );
}

export default CreateProfile;