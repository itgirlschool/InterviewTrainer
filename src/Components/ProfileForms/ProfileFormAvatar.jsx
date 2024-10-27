import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../app/store/slice/UserAuthSlice";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import edit_icon from "../../../src/assets/images/edit_icon.svg";
import "./ProfileFormAvatar.scss";

const ProfileFormAvatar = () => {
    const [avatarFile, setAvatarFile] = useState(null);
    const user = useSelector((state) => state.userAuth);
    const dispatch = useDispatch();
    const storage = getStorage();

    useEffect(() => {
        if (user.avatar) {
            setAvatarFile(null);
        }
    }, [user.avatar]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAvatarFile(file);
            handleUpload(file);
        }
    };

    const handleUpload = async (file) => {
        if (!file) return;
        const avatarRef = ref(storage, `avatars/${user.id}.png`);
        await uploadBytes(avatarRef, file);
        const avatarUrl = await getDownloadURL(avatarRef);
        dispatch(setAvatar(avatarUrl));
    };

    const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();
    const initials = user.displayName ? getInitials(user.displayName) : '';

    return (
        <div className="avatar__container">
            <label htmlFor="avatarUpload" className="avatar__label">
                <div className="avatar__circle">
                    {user.avatar ? (
                        <img src={user.avatar} alt="Avatar" className="avatar__image" />
                    ) : (
                        <span className="avatar__initials">{initials || 'А'}</span>
                    )}
                </div>
                <span className="avatar__text">Изменить фото профиля</span>
                <img
                    src={edit_icon}
                    alt="Edit"
                    className="avatar__edit-icon"
                    onClick={() => document.getElementById("avatarUpload").click()}
                />
            </label>
            <input
                id="avatarUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
                onClick={(event) => { event.target.value = null; }}
            />
        </div>
    );
};

export default ProfileFormAvatar;
