<script>
    import {addTodo} from '../stores/todoStore.js';
    let todo = ''

    const handlesubmit = ()=>{
        addTodo(todo)
        todo = ''
        console.log(todo)
    }

</script>

<form on:submit|preventDefault={handlesubmit} class="my-6">
    <div class="flex flex-col text-sm mb-2">
        <label class="text-bold text-gray-800 mb-2 " for="todos">Pendientes</label>
        <input type="text" bind:value={todo} name="todos" placeholder="Añade aqui tus pendientes" 
            class="appearance-none shadow-sm border border-gray-200 p-2 
                focus:outline-none focus:border-gray-500 rounded-lg">
    </div>
    <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Añadir</button>
</form>