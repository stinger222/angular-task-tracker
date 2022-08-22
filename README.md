# What is it?
Just ordinary, simple app to learn basics of Angular framework.

# What basics exactly? What knowledge I got from building this project?
- Angular CLI:
  - setup flags
  - templates
  - generating components, services
- Angular apps file structure
- Some template syntax, such as
  - property binding
  - two-way binding
  - event binding
  - attribute directives (ngClass, ngStyle, ngFor)
  - @Inputs & @Outputs
- Global/Local Styling
- Third party modules (fontawesome icons)
- Services
  - generating
  - using inside components
  - services goals
- RxJs
  - Streams / Work with async data
    - Observables, subscription methods, live cycle, best practices
    - Subjects, their variations (Behavior, Async), goals, differences etc
  - Pipes... concept? idk
    - data normalization using Observable.pipe(fn1, ...) method + rxjs's map, filter etc 
- Mock backend using JSON-Server
- Http Module
  - CRUD operations
  - observables
- Forms Module
  - two-way binding
  - submitting
- Router Module
  - actual routing
  - conditional rendering depending on url
  - router links

- And JUST TON of theoretical info from endless(or not so) articles and videos

# If you (for some reason) wanna start this shit locally:
1. just copy this repository
2. run "npm i" to install app dependencies
3. run "ng serve -o" to run project on http://localhost:4200
4. run "npm run server" to start mock backend (db.json file)
