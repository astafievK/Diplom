import {FC} from "react";
import { baseUrl } from '../../api/api.ts';
import { useTypedSelector } from '../../store/hooks/redux.ts';
import { useDeleteWorkPhotoMutation } from '../../api/methods/imageApi.ts';
import { getMessageFromError } from '../../utils/errors.ts';
import { message } from 'antd';

interface IWorkPhotoTile{
    idEmployee: number
    idImage: number
}

const WorkPhotoTile: FC<IWorkPhotoTile> = (props) => {
    const {user} = useTypedSelector(state => state.auth)
    const [deletePhoto] = useDeleteWorkPhotoMutation()

    const handleOnClick = async () => {
        if (props.idEmployee && props.idImage){
            const response = await deletePhoto({
                idEmployee: props.idEmployee,
                idImage: props.idImage
            })

            if('error' in response){
                const errorString = getMessageFromError(response)
                message.error(`${errorString}`, 3)
            }
            else{
                message.error(`${response.data.message}`, 3)
            }
        }
        else{
            message.error(`Ошибка удаления фото`, 3)
        }
    }

    return (
        <div className={'tile-wrapper'}>
            <img src={`${baseUrl}/image/get/${props.idImage}`} loading={"lazy"} alt={""}/>
            {
                (user && user.role.title === "Администратор") && (
                    <button className="delete" onClick={handleOnClick}>Удалить</button>
                )
            }
        </div>
    )
}

export default WorkPhotoTile