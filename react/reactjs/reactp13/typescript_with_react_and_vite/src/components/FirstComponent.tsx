
const FirstComponent = () => {
    const userName: string = "Emanuel";

    const currentUserName = (currentName: string) => {
        return `O seu nome é ${currentName}`
    }

  return (
    <div>
        <h1>FirstComponent</h1>
        <p>{currentUserName(userName)}</p>
    </div>
  )
}

export default FirstComponent