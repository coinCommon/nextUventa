import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

const EditModals = ({edit, setEdit, dataEdit, setDataEdit, SaveData, fileIMG, setFileIMG, filePreviewIMG, setFilePreviewIMG, SaveDataIMG, fileIconEd, setFileIconEd, filePreviewIconEd, setFilePreviewIconEd, SaveDataIcon}) => {


    // preview картики
    function previewFile(file) {
        let reader = new FileReader()
        if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file)
            reader.onloadend = function() {
                setFilePreviewIMG(reader.result)
            }
        }
        else {
            setFilePreviewIMG(null)
        }
    }
    function previewFileIcon(fileIcon) {
        let reader = new FileReader()
        if (fileIcon && fileIcon.type.match('image.*')) {
            reader.readAsDataURL(fileIcon)
            reader.onloadend = function() {
                setFilePreviewIconEd(reader.result)
            }
        }
        else {
            setFilePreviewIconEd(null)
        }
    }

    const selectFile = e => {
        if (e.target.files.length === 0) {
            previewFile(false)
            return false
        }
        setFileIMG(e.target.files[0])
        previewFile(e.target.files[0])
    }
    const selectFileIcon = e => {
        if (e.target.files.length === 0) {
            previewFileIcon(false)
            return false
        }
        setFileIconEd(e.target.files[0])
        previewFileIcon(e.target.files[0])
    }


    // Меняем цвет когда наводим на кнопку загрузки файла
    const DragFile = e => {
        e.preventDefault();
        e.target.style.background = '#4375f7'
    }
    // Меняем цвет когда отводим от кнопки загрузки файла
    const LeaveFile = e => {
        e.preventDefault();
        e.target.style.background = '#419152'
    }
    // Загрузка файла при DROP над кнопкой
    const DropFile = e => {
        e.preventDefault();
        setFileIMG(e.dataTransfer.files[0])
        previewFile(e.dataTransfer.files[0])
        e.target.style.background = '#419152'
    }
    const DropFileIcon = e => {
        e.preventDefault();
        setFileIconEd(e.dataTransfer.files[0])
        previewFileIcon(e.dataTransfer.files[0])
        e.target.style.background = '#419152'
    }
    return (
        <div
            style={edit !== 0 ? {opacity: 1, visibility: 'visible'} : {}}
            className={'modals_fixed'}
        >
            <div className={'modals_relative'}>

                <div onClick={() => setEdit(0)} className={'hide_modals'}></div>

                <div className={'modals_content'}>

                    <div className={'modals_flex_up'}>
                        <h4>
                            Редактор данных
                        </h4>
                        <button onClick={() => setEdit(0)}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>


                    <div className={'modals_form'}>

                        {Object.keys(dataEdit[0]).map((data,index) =>

                                data === 'title' ||
                                data === 'description' ||
                                data === 'min_description' ||
                                data === 'name' ||
                                data === 'price' ?

                                    <div key={index} className={'inputs_label'}>
                                        <textarea
                                            value={Object.values(dataEdit[0])[index]}
                                            onChange={(e) => setDataEdit(dataEdit.map(d => d.title !== false ? {...d, [data] : e.target.value} : d))}
                                        >
                                        </textarea>
                                        <label>{data}</label>
                                    </div>

                                    :
                                    ''
                        )}

                        {Object.keys(dataEdit[0]).map((data,index) =>
                            data === 'img' ?

                                <div key={index} style={{width: '100%', textAlign: 'center'}}>
                                    <div style={{width: '100%'}}>

                                        {filePreviewIMG !== null ? <img style={{height: '140px'}} src={filePreviewIMG}/> :
                                            <img
                                                style={{height: '140px'}}
                                                src={process.env.NEXT_PUBLIC_REACT_APP_API_URL + Object.values(dataEdit[0])[index]}
                                            />
                                        }

                                        <div className={'inputs_file'}>
                                            <small style={{fontSize: '10px'}}>

                                            </small>
                                            {filePreviewIMG !== null && fileIMG ?
                                                <button
                                                    onClick={() => SaveDataIMG()}
                                                    style={{margin: '10px 0', width: '100%', padding: '5px 0', borderRadius: '5px', border: 'none', background: 'crimson', color: '#FFF'}}>
                                                    Сохранить изменения
                                                </button>
                                                : '' }
                                            <input
                                                id={'input__file'}
                                                type={'file'}
                                                onChange={(e) => selectFile(e)}
                                            />
                                            <label
                                                draggable
                                                onDragOver={(e) => DragFile(e)}
                                                onDragLeave={(e) => LeaveFile(e)}
                                                onDrop={(e) => DropFile(e)}
                                                htmlFor='input__file'
                                            >
                                                Выбрать изображение
                                            </label>
                                        </div>

                                    </div>

                                </div>

                                :
                                ''
                        )}

                        {Object.keys(dataEdit[0]).map((data,index) =>
                            data === 'icon' ?
                                <div key={index} style={{width: '100%', textAlign: 'center'}}>
                                    <div style={{width: '100%'}}>
                                        {filePreviewIconEd !== null ? <img style={{height: '140px'}} src={filePreviewIconEd}/> :
                                            <img
                                                style={{height: '140px'}}
                                                src={process.env.NEXT_PUBLIC_REACT_APP_API_URL + Object.values(dataEdit[0])[index]}
                                            />
                                        }
                                        <div className={'inputs_file'}>
                                            <small style={{fontSize: '10px'}}>
                                            </small>
                                            {filePreviewIconEd !== null && fileIconEd ?
                                                <button
                                                    onClick={() => SaveDataIcon()}
                                                    style={{margin: '10px 0', width: '100%', padding: '5px 0', borderRadius: '5px', border: 'none', background: 'crimson', color: '#FFF'}}>
                                                    Сохранить изменения
                                                </button>
                                                : '' }
                                            <input
                                                id={'input__fileIcon'}
                                                type={'file'}
                                                onChange={(e) => selectFileIcon(e)}
                                            />
                                            <label
                                                draggable
                                                onDragOver={(e) => DragFile(e)}
                                                onDragLeave={(e) => LeaveFile(e)}
                                                onDrop={(e) => DropFileIcon(e)}
                                                htmlFor='input__fileIcon'
                                            >
                                                Выбрать иконку
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                :
                                ''
                        )}


                        <div className={'buttons'}>
                            <button onClick={() => SaveData()} className={'button_blue'}>Сохранить</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default EditModals;