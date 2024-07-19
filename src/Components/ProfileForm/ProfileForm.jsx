import './ProfileForm.scss';

export default function ProfileForm (){
    const user ={userName:'Имя', lastname:'Фамилия', phone:'7777777', email:'email@email.com', password:'0987654321'};
        
    return (
        <form action="">
            <label ><span>Имя</span>
                <input 
                    type="text" 
                    value={user.userName}
                    onChange={(e)=>setUserData("name",e.target.value)}
                />
            </label>
            <label ><span>Фамилия</span>
                <input 
                    type="text" 
                    value={user.lastname}
                    onChange={(e)=>setUserData("lastname",e.target.value)}
                />
            </label>
            <label ><span>Телефон</span>
                <input 
                    type="number" 
                    value={user.phone}
                    onChange={(e)=>setUserData("phone",e.target.value)}
                />
            </label>
            <label ><span>Email</span>
                <input 
                    type="text" 
                    value={user.email}
                    onChange={(e)=>setUserData("email",e.target.value)}
                />
            </label>
            <label ><span>Пароль</span>
                <input 
                    type="password" 
                    value={user.password}
                    onChange={(e)=>setUserData("password",e.target.value)}
                />
            </label>
            <button>Редактировать</button>
        </form>
    )
}