/*A model can be as simple as a "property bag" that holds facts about a thing of application importance. 
That describes well our Hero class with its three required fields (id, name, power) and one optional field (alterEgo). */
export class Hero {
    constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
/** It's an anemic model with few requirements and no behavior. 

The TypeScript compiler generates a public field for each public constructor parameter and assigns the parameter’s value 
to that field automatically when we create new heroes.

The alterEgo is optional and the constructor lets us omit it; note the (?) in alterEgo?.

 */