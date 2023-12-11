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
		    <input {...register("firstName", { maxLength: 15, required: true })} />
		    {/* errorsと登録したname属性を使用して、エラーメッセージを記述 */}
		    {errors.firstName?.type === "maxLength" && <p>15文字以内で入力してください</p>}
		　  　　　　{errors.firstName?.type === "required" && <p>名は入力必須です</p>}
		    <label>Last Name</label>
		    <input {...register("lastName", { maxLength: 15, required: true })} />
		    {errors.lastName?.type === "maxLength" && <p>15文字以内で入力してください</p>}
				{errors.lastName?.type === "required" && <p>性は入力必須です</p>}
		    <label>Email</label>
		    <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)/ })} />
		    {errors.email && <p>メールアドレスは必須です</p>}
		    <input type="submit" value="submit" />
		  </form>
    );
}