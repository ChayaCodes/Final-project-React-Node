import "./edit-forum.css"

const EditForum = () => {
  return (
    <div className='edit-forum-container'>
    <form className='edit-forum-form'>
      <input type='text' placeholder='שם הפורום' className='edit-forum-input' required name='name' />
      <textarea placeholder='תיאור הפורום' className='edit-forum-textarea' required name='description'></textarea>
      <div className='edit-forum-checkbox'>
        <input type='checkbox' name='public' id='public' />
        <label htmlFor='public'> ציבורי</label>
      </div>
      <button className='edit-forum-submit'>צור פורום</button>
    </form>

  </div>
  )
}

export default EditForum