import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAvatar } from '../../app/store/slice/UserAuthSlice';
import { updateUserAvatar } from '../../Services/fbAvatar';
import edit_icon from '../../../src/assets/images/edit_icon.svg';
import avatars from './avatars';
import './ProfileFormAvatar.scss';

const ProfileFormAvatar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    
    const userID = useSelector(state => state.userAuth.id);
    const currentUserData = useSelector(state => state.userAuth);
    const usersData = useSelector(state => state.users);
    const usersList = usersData.users;

    const [selectedAvatar, setSelectedAvatar] = useState(currentUserData.avatar);

    useEffect(() => {
        if (currentUserData.avatar) {
            setSelectedAvatar(currentUserData.avatar);
        }
    }, [currentUserData.avatar]);

    const handleAvatarSelect = (avatar) => {
        setSelectedAvatar(avatar);
    };

    const handleSave = async () => {
        if (selectedAvatar !== currentUserData.avatar) {
            await updateUserAvatar(userID, selectedAvatar);
            dispatch(setAvatar(selectedAvatar)); 
        }
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const getInitials = () => {
        return currentUserData.displayName ? currentUserData.displayName.split(' ').map(n => n[0]).join('').toUpperCase() : 'А';
    };

    return (
        <div className="avatar__container">
            <div className="avatar__label" onClick={() => setIsModalOpen(true)}>
                <div className="avatar__circle">
                    {currentUserData.avatar ? (
                        <img src={currentUserData.avatar} alt="Avatar" className="avatar__image" />
                    ) : (
                        <span className="avatar__initials">{getInitials()}</span>
                    )}
                </div>
                <span className="avatar__text">Изменить фото профиля</span>
                <img src={edit_icon} alt="Edit" className="avatar__edit-icon" />
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal__content">
                        <div className="avatar__preview-circle">
                            {selectedAvatar ? (
                                <img src={selectedAvatar} alt="Selected Avatar" className="avatar__preview-image" />
                            ) : (
                                <span className="avatar__preview-text">Выбери котика</span>
                            )}
                        </div>
                        <div className="avatar__selection">
                            {avatars.map(({ id, image }) => (
                                <img
                                    key={id}
                                    src={image}
                                    alt={`Avatar ${id}`} 
                                    className={`avatar__selection-image ${selectedAvatar === image ? 'selected' : ''}`}
                                    onClick={() => handleAvatarSelect(image)}
                                />
                            ))}
                        </div>
                        <div className="modal__buttons">
                            <button onClick={handleSave}>Сохранить</button>
                            <button onClick={handleCancel}>Отмена</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileFormAvatar;
