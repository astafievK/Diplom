import React, { FC, useState } from 'react';
import {useAppDispatch, useTypedSelector} from '../../../store/hooks/redux.ts';
import { setIsOpen } from '../../../api/slices/addEmployerModalSlice.ts';
import * as transliteration from 'transliteration';

export const ModalAddEmployer: FC = () => {
    const dispatch = useAppDispatch();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        if (file) {
            setSelectedFile(file);
            console.log('успешно')
        }
        else{
            console.error("ошибка")
        }
    };

    const { isOpen } = useTypedSelector(
        (state) => state.addEmployeeModalReducer,
    );

    const handleCrossCancelSpoilerClick = () => dispatch(setIsOpen(false));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const originalFileName = selectedFile ? selectedFile.name : "default.png";
        const translitFileName = transliteration.transliterate(originalFileName);

        const formData = new FormData();
        formData.append("file", selectedFile || new Blob(), translitFileName);

        try {
            const response = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to upload file");
            }

            console.log("File uploaded successfully!");
        } catch (error) {
            console.error("Error uploading file:", error);

        } finally {
            setSelectedFile(null);
        }
    };

    return (
        <div className={'modal add-employer__modal' + (isOpen ? ' active' : '')}>
            <form className="container" onSubmit={handleSubmit}>
                <div className="container-item photo">
                    <div className="photo-wrapper">
                        {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Загруженное фото" />}
                    </div>
                    <div className="actions">
                        <div className="file-input__wrapper">
                            <label htmlFor={'upload-photo-employer-add'}>
                                <span>Загрузить фото</span>
                                <input
                                    type="file"
                                    id="upload-photo-employer-add"
                                    accept="image/*"
                                    onChange={onChange}
                                />
                            </label>
                        </div>
                        <input type="text" placeholder={"Стаж (лет)"} />
                    </div>
                </div>
                <div className="container-item fields">
                    <input
                        type="text"
                        className="field field-surname"
                        placeholder={'Фамилия'}
                    />
                    <input
                        type="text"
                        className="field field-name"
                        placeholder={'Имя'}
                    />
                    <input
                        type="text"
                        className="field field-patronymic"
                        placeholder={'Отчество'}
                    />
                </div>

                <div className="container-item services">

                </div>

                <div className="container-item actions">
                    <button
                        type={'submit'}
                    >
                        Создать
                    </button>
                    <button
                        onClick={handleCrossCancelSpoilerClick}
                    >
                        Отмена
                    </button>
                </div>
                <div className="cross" onClick={handleCrossCancelSpoilerClick}></div>
            </form>
            <div className="spoiler" onClick={handleCrossCancelSpoilerClick}></div>
        </div>
    );
}

