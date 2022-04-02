public class Retangulo extends Triangulo
{
    Retangulo(float base, float altura) 
    {
        super(base, altura);
    }

    public float area() 
    {
        return super.getAltura() * super.getBase();
    }

    public float perimetro() 
    {
        return (2 * getAltura()) + (2 * getBase());
    }

    public void mostraDados() 
    {
        System.out.print(
            "------------------------" + "\n" +
            "    Dados do retângulo  " + "\n" + 
            " Base: " + super.getBase() + "\n" + 
            " Altura: " + super.getAltura() + "\n" +
            " Área: " + area() + "\n" +
            " Perímetro: " + perimetro() + "\n" + 
            "------------------------" + "\n"
        );
    }
}
