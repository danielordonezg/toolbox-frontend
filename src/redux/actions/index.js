export const GET_INFO = 'GET_INFO';
export const FILTER_INFO_BY_NAME = 'FILTER_INFO_BY_NAME';
export const RESET = 'RESET';


export const getInfo = () => {
    return async (dispatch) => {
        return fetch('http://localhost:7001/files/data')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch({
                    type: GET_INFO,
                    payload: json
                })
            }).catch(err => {
                console.log(err)
                alert('Error')
            }
            )
    }
}

export const filterInfoByName = (name) => {
    return async (dispatch) => {
        return fetch(`http://localhost:7001/files/data?filename=${name}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch({
                    type: FILTER_INFO_BY_NAME,
                    payload: json
                })
            }).catch(err => {
                console.log(err)
                alert('Error')
            }
            )
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}


