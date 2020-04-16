import React, {useRef} from 'react'
import Button from '../../atoms/button/Button'
import InputText from '../../atoms/textInput/InputText'
import {getRepoList} from '../../../service/getRepoList'

export default function SearchBar(props) {

  const searchName = useRef();

  const getRepoInfo = async(userName) => {
    const result = await getRepoList(userName);
    props.setRepoList(result);
    props.setUserName(userName);
  }
  
  return (
    <div className="SearchBar">
      <InputText placeholder={"검색할 Github User 또는 Organization의 이름을 입력해주세요!"} searchName={searchName} />
      <Button name="Search" onClick={() => getRepoInfo(searchName.current.value)}/>
    </div>
  )
}
