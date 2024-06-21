
 const RecipeInfo = (params) => {

  const id = params.id;//extraemos el id de la receta para hacer ftch mediante el id


  return (
  <>
  <h2 className="pt-40">RecipeInfo</h2>
    <section className="w-3/12 bg-red-300">
    <header>boton para volver a pagina anterior donde estan las recetas</header>
      <article>
          categoria de la receta
      </article>

      <article>
          imagen de la receta
      </article>
        <section>
          <article>
              lista de ingrdientes
          </article>

          <article>
            instrucciones
          </article>
        </section>
      <footer>

          botones de accion de eliminar de favs o agregar 

      </footer>
    </section>
 
  </>
  )
}
export default RecipeInfo;
