import Pokemon from "../models/pokemon";

export default class PokemonService {
  static async getPokemons(): Promise<Pokemon[]> {
    try {
      const response = await fetch("http://localhost:3001/pokemons");
      this.checkResponseStatus(response);
      const data = await response.json();
      return this.isEmpty(data) ? [] : data;
    } catch (error) {
      this.handleError(error as Error);
      return [];
    }
  }

  static async getPokemon(id: number): Promise<Pokemon | null> {
    try {
      const response = await fetch(`http://localhost:3001/pokemons/${id}`);
      this.checkResponseStatus(response);
      const data = await response.json();
      return this.isEmpty(data) ? null : data;
    } catch (error) {
      this.handleError(error as Error);
      return null;
    }
  }

  static async updatePokemon(pokemon: Pokemon): Promise<Pokemon | null> {
    try {
      const response = await fetch(
        `http://localhost:3001/pokemons/${pokemon.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pokemon),
        }
      );
      return await response.json();
    } catch (error) {
      this.handleError(error as Error);
      return null;
    }
  }

  static async deletePokemon(pokemon: Pokemon): Promise<void> {
    try {
      await fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      this.handleError(error as Error);
    }
  }

  static async addPokemon(pokemon: Pokemon): Promise<Pokemon | null> {
    delete pokemon.created;

    const pokemonData = { ...pokemon, id: pokemon.id.toString() };
    try {
      const response = await fetch("http://localhost:3001/pokemons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemonData),
      });
      return await response.json();
    } catch (error) {
      this.handleError(error as Error);
      return null;
    }
  }

  static async searchPokemon(term: string): Promise<Pokemon[]> {
    try {
      const response = await fetch(`http://localhost:3001/pokemons?q=${term}`);
      return await response.json();
    } catch (error) {
      this.handleError(error as Error);
      return [];
    }
  }

  // Fonction pour vérifier le statut HTTP
  static checkResponseStatus(response: Response) {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error) {
    console.error("An error occurred:", error);
    // Possibilité d’ajouter une logique supplémentaire, comme des alertes ou logs
  }
}
