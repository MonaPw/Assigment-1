import keyConceptsImage from '../../assets/images/key-concepts.png';

function Header() {
return (
    <header>
        <img src={keyConceptsImage} alt='Medal badge with a star' />
        <h1>Key React Concept</h1>
        <p>selected key React Concepts you should know about</p>
      </header>
    );
}

export default Header;