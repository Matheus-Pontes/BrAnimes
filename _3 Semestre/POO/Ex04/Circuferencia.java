public class Circuferencia extends Forma
{
    private float raio;
    
    Circuferencia(float raio) 
    {
        this.raio = raio;
    }

    public float getRaio() 
    {
        return raio;
    }

    public void setRaio(float raio) 
    {
        this.raio = raio;
    }

    public float area() 
    {
        return 3.14f  * (getRaio() * getRaio());
    }

    public float perimetro() 
    {
        return 2 * 3.14f * getRaio();
    }

    public void mostraDados() 
    {
        System.out.print(
            "--------------------------" + "\n" +
            "  Dados da circuferência  " + "\n" + 
            " Raio: " + getRaio() + "\n" +
            " Área: " + area() + "\n" + 
            " Perímetro: " + perimetro() + "\n" +
            "--------------------------" + "\n" 
        );
    }
}
