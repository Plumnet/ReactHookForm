import { useForm } from 'react-hook-form';
import './styles.css';

export default function App() {
		/* useFormからformState: {errors} をimport */
    const {
        register,
        handleSubmit,
				formState: { errors }
    } = useForm();
		
    const onSubmit = (data) => console.log('onSubmit:', data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
		    <label>First Name</label>
		    {/* register関数の第2引数にバリデーションのルールを追加 */}
		    <input {...register("firstName", { maxLength: 15 })} />
		    {/* errorsと登録したname属性を使用して、エラーメッセージを記述 */}
		    {errors.firstName && <p>15文字以内で入力してください</p>}
		    <label>Last Name</label>
		    <input {...register("lastName", { maxLength: 15 })} />
		    {errors.lastName && <p>15文字以内で入力してください</p>}
		    <label>Email</label>
		    <input {...register("email", { required: true })} />
		    {errors.email && <p>メールアドレスは必須です</p>}
		    <input type="submit" value="submit" />
		  </form>
    );
}