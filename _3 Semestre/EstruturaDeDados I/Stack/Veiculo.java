public class Veiculo 
{
    public String placa;
    public String marca;
    public String modelo;
    public String anoDeFabricacao;

    public Veiculo(String placa, String marca, String modelo, String anoDeFabricacao) 
    {
        setPlaca(placa);
        setMarca(marca);
        setModelo(modelo);
        setAnoDeFabricacao(anoDeFabricacao);
    }

    public String getAnoDeFabricacao() {
        return anoDeFabricacao;
    }

    public String getMarca() {
        return marca;
    }
    
    public String getModelo() {
        return modelo;
    }
    public String getPlaca() {
        return placa;
    }

    public void setAnoDeFabricacao(String anoDeFabricacao) {
        this.anoDeFabricacao = anoDeFabricacao;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    @Override
    public String toString() 
    {
        return (
            "Placa: " + getPlaca() + ", Marca: " + getMarca() + ", Modelo: " + getModelo() + " e Ano de fabricação: " +getAnoDeFabricacao()
        );
    }

    public void showData() 
    {
        System.out.print(getAnoDeFabricacao() + " " + getMarca() + " " + getModelo() + " " + getPlaca());
    }
}