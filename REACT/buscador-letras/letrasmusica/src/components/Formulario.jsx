import React, { useState } from 'react'

const Formulario = ({ saveSearchLetter }) => {
    //state
    const [search, saveSearch] = useState({
        artista: '',
        song: '',
    })

    const [error, saveError] = useState(false)

    const { artista, song } = search

    //function that updates the search state 
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
    //function to perform the search in apis
    const searchinformation = e => {
        e.preventDefault()

        //validate
        if (artista.trim() === '' || song.trim() === '') {
            saveError(true)
            return;
        }

        saveError(false)
        saveSearchLetter(search)
    }

    return (
        <div className='bg-info'>
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={searchinformation}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'>
                        <fieldset>
                            <legend className='text-center'>Buscador Letras Canciones</legend>
                        </fieldset>

                        <div className="row">
                            {error ?
                                <div className="col-12">
                                    <div class="alert alert-danger text-center" role="alert">
                                        Debes rellenar todos los campos
                                    </div>
                                </div> :
                                null
                            }
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='artista'
                                        placeholder='Nombre Artista'
                                        onChange={updateState}
                                        value={artista}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name='song'
                                        placeholder='Nombre Canción'
                                        onChange={updateState}
                                        value={song}
                                    />
                                </div>
                            </div>

                            <div className="col-12">
                                <button
                                    type='submit'
                                    className='btn btn-primary float-right w-100'
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario;