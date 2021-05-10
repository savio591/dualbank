import {
  DropdownAccountsStyle,
  DropdownOptionsStyle,
} from "../styles/DropdownStyle";

interface DropdownProps {
  type: "options" | "accounts";
  options?: {
    name: string;
    url: string;
  }[];
  accounts?: {
    name: string;
    agency: string;
    accountId: string;
  }[];
}

export function Dropdown({ type }: DropdownProps) {
  if (type === "options") {
    return (
      <DropdownOptionsStyle>
        <li>Enviar por email</li>
        <li>Enviar por whatsapp</li>
        <li>Enviar por opção 3</li>
      </DropdownOptionsStyle>
    );
  }

  if (type === "accounts") {
    return (
      <DropdownAccountsStyle>
        <li>
          <h2>Conta Corrente</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 00000000000000000020-1</span>
          </div>
        </li>
        <li>
          <h2>Conta Poupança</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 01010010001000010000-2</span>
          </div>
        </li>
        <li>
          <h2>C.C. Ed. Suzano</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 000000000000015-1</span>
          </div>
        </li>
        <li>
          <h2>Conta Corrente</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 00000000000000000020-1</span>
          </div>
        </li>
        <li>
          <h2>Conta Poupança</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 01010010001000010000-2</span>
          </div>
        </li>
        <li>
          <h2>C.C. Ed. Suzano</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 000000000000015-1</span>
          </div>
        </li>
        <li>
          <h2>Conta Corrente</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 00000000000000000020-1</span>
          </div>
        </li>
        <li>
          <h2>Conta Poupança</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 01010010001000010000-2</span>
          </div>
        </li>
        <li>
          <h2>C.C. Ed. Suzano</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 000000000000015-1</span>
          </div>
        </li>
        <li>
          <h2>Conta Corrente</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 00000000000000000020-1</span>
          </div>
        </li>
        <li>
          <h2>Conta Poupança</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 01010010001000010000-2</span>
          </div>
        </li>
        <li>
          <h2>C.C. Ed. Suzano</h2>
          <div>
            <span>Ag. 00005-1</span>
            <span>C.C. 000000000000015-1</span>
          </div>
        </li>
      </DropdownAccountsStyle>
    );
  }

  return <div></div>;
}
