import './add-forum.css'

const AddForum = () => {
  return (
    <div className='add-forum-container'>
      <form className='add-forum-form'>
        <input type='text' placeholder='שם הפורום' className='add-forum-input' required name='name' />
        <textarea placeholder='תיאור הפורום' className='add-forum-textarea' required name='description'></textarea>
        <div className='add-forum-checkbox'>
          <input type='checkbox' name='public' id='public' />
          <label htmlFor='public'> ציבורי</label>
        </div>
        <button className='add-forum-submit'>צור פורום</button>
      </form>

    </div>
  )
}

export default AddForum