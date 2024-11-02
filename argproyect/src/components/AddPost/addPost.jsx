import { useState } from "react";
import DatePicker from "react-datepicker";
import confirmModal from "../Confirm-Modal/ConfirmModal";

import "react-datepicker/dist/react-datepicker.css";
import ".AddPost.css";

const initBlogValue ={
    autor: '',
    título: '',
    descripción: '',
    date: newDate(),
    urlToImage: '',
};

const AddPost = () => {
    const [blog, setBlog] = useState (initBlogValue);
    const [isModalOpen, setIsModalOpen] = useState (false);

    const isBtnDisabled = !(blog.autor && blog.titulo);

    const handleCloseModal= () => setIsModalOpen(false);

    const handleChange= (value, type) => {
        setBlog ((prevState)=> {
            return {
                ...prevState,
                [type]:value,
            };
        });
    };

    const handleImageChange= (event) => {
        const file= event.target.files[0];
        if (file){
            setBlog ((prevState) =>{
                return {
                    ...prevState,
                    urlToImage: URL.createObjectURL(file),
                };
            });
        }
    };

    const handleConfirm= () => {
        console.log ('accion confirmada')
        handleCloseModal();
        setBlog(initBlogValue);
    };

    const handelSubmit= (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (blog.autor && blog.título){
            console.log('hanldeSubmit');
            setIsModalOpen(true);
        };
    };

    return(
        <>
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-blog">
                <label htmlFor="" className="lable-blog">Autor</label>
                <input
                className="input-blog"
                type="text"
                value={blog.autor}
                onChange={(event)=> handleChange(event.target.value, 'autor')}
                />
                <label htmlFor="" className="label-blog">Título</label>
                <input
                className="input-blog"
                type="text"
                value={blog.titulo}
                onChange={(event)=> handleChange(event.target.value, 'Título')}
                placeholder="Ingrese título"
                />
                <label htmlFor="" className="label-blog">Fecha de Publicación</label>
                <DatePicker
                className="input-blog"
                selected={blog.date}
                onChange={(date)=> handleChange(date, 'date')}
                dateFormat={'dd/MM/YYYY'}
                />
                <label htmlFor="" className="label-blog">Descripcion</label>
                <Textarea
                className="input-blog text-area-blog"
                value={blog.descripción}
                onChange={(event)=> handleChange(event.target.value, 'descripcion')}
                placeholder="Ingrese descripcion"
                />
                <label className="label-blog">
                    Seleccionar imágen:
                </label>
                <input //TO DO: fix inline
                className="input-blog"
                type="file"
                accept="image*"
                onChange={handleImageChange}
                />
                {blog.urlToImage && (
                    <div className="image-previews-container">
                        <p className="label-blog">Vista previa de la imagen</p>
                        <image
                        className="image-preview"
                        src={blog.urlToImage}
                        alt="Vista previa"
                        style={{width:'200px', height:'auto', marginTop:'10px'}} // TO DO: fix style inline
                        />
                    </div>
                )}
                <button
                type="submit"
                className="btn-blog"
                disabled={isBtnDisabled}
                >
                    Confirmar
                </button>
            </form>
        </div>
        {isModalOpen && (
            <confirmModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirm}
            message="¿Estás seguro de realizar esta acción?"
            />
        )}
        </>
    );
};

export default AddPost;
