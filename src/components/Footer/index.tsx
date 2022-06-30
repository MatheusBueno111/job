import { FooterContainer} from "./styles";

export function Footer () {
  return(
    <FooterContainer>
        <h3>Reach Me</h3>
        <ul>
            <li>
              <a href="https://www.linkedin.com/in/matheus-bueno-queiroz/" >
                <img src="/linkedin.svg" alt="linkedin.svg" />
              </a>
            </li>
            <li>
              <a href="https://github.com/MatheusBueno111/" >
                <img src="/github.svg" alt="github.svg" />
              </a>
            </li>
        </ul>
    </FooterContainer>
  )
}