import { FC, useState } from 'react';

export const SelectService: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div
            className={`dropdown form-elem ${isExpanded ? 'expanded' : ''}`}
            onClick={handleButtonClick}
        >
            <input
                type="text"
                className="dropdown-button"
                id="searchInputService"
                autoComplete={'off'}
                placeholder="Услуга"
                readOnly={true}
            />
            <div className="dropdown-content" id="dropdownContent">
                <span className={'dropdown-content__item'} data-value={'1'}>
                    Педикюр
                </span>
                <span className={'dropdown-content__item'} data-value={'2'}>
                    Маникюр
                </span>
            </div>
        </div>
    );
};
