import { Box, Select, Image } from "@chakra-ui/react";

export default function SelectHome({setCity}) {
  return (
    <Box>
      <Select cursor="pointer" w="60%" m="auto">
        <option value="INDIA" display="flex" alignItems="center">
          <span>
            <Image
              src="https://zoomcar-assets.zoomcar.com/images/original/f0d042984d127268653508c035fbc01a5613ae45.png?1654779701"
              alt="Indonesia Logo"
            />
          </span>
          VIETNAM
        </option>
        <option value="INDONESIA" display="flex" alignItems="center">
          <span>
            <Image
              src="https://zoomcar-assets.zoomcar.com/images/original/9629b3e6f9f92bdbcb47471851a45c475cae938f.png?1654779720"
              alt="Indonesia Logo"
            />
          </span>
          INDONESIA
        </option>
        <option value="INDIA" display="flex" alignItems="center">
          <span>
            <Image
              src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"
              alt="India Logo"
            />
          </span>
          INDIA
        </option>
        <option value="EGYPT" display="flex" alignItems="center">
          <span>
            <Image
              src="https://zoomcar-assets.zoomcar.com/images/original/e624749b40c1d9910eaaee74f0a83ea3867e2322.png?1654779678"
              alt="Egypt Logo"
            />
          </span>
          EGYPT
        </option>
      </Select>
      <br />
      <Select cursor="pointer" w="60%" m="auto" overflow="scroll" onChange={(e)=>setCity(e.target.value)}>
        <option value="Bangalore" display="flex" alignItems="center">
          Bangalore
        </option>
        <option value="Pune" display="flex" alignItems="center">
          Pune
        </option>
        <option value="Delhi NCR" display="flex" alignItems="center">
          Delhi NCR
        </option>
        <option value="Mumbai" display="flex" alignItems="center">
          Mumbai
        </option>
        <option value="Chennai" display="flex" alignItems="center">
          Chennai
        </option>
        <option value="Hyderabad" display="flex" alignItems="center">
          Hyderabad
        </option>
        <option value="Chandigarh" display="flex" alignItems="center">
          Chandigarh
        </option>
        <option value="Kolkata" display="flex" alignItems="center">
          Kolkata
        </option>
        <option value="Ahmedabad" display="flex" alignItems="center">
          Ahmedabad
        </option>
        <option value="Coimbatore" display="flex" alignItems="center">
          Coimbatore
        </option>
        <option value="Hyderabad" display="flex" alignItems="center">
          Hyderabad
        </option>
        <option value="Indore" display="flex" alignItems="center">
          Indore
        </option>
        <option value="Jaipur" display="flex" alignItems="center">
          Jaipur
        </option>
        <option value="Mangalore" display="flex" alignItems="center">
          Mangalore
        </option>
        <option value="Mysure" display="flex" alignItems="center">
          Mysure
        </option>
        <option value="Vizag" display="flex" alignItems="center">
          Vizag
        </option>
        <option value="Goa" display="flex" alignItems="center">
          Goa
        </option>
        <option value="Nagpur" display="flex" alignItems="center">
          Nagpur
        </option>
        <option value="Kochi" display="flex" alignItems="center">
          Kochi
        </option>
        <option value="Vijaywada" display="flex" alignItems="center">
          Vijaywada
        </option>
        <option value="Siliguri" display="flex" alignItems="center">
          Siliguri
        </option>
        <option value="Bhopal" display="flex" alignItems="center">
          Bhopal
        </option>
        <option value="Lucknow" display="flex" alignItems="center">
          Lucknow
        </option>
        <option value="Guwhavti" display="flex" alignItems="center">
          Guwhavti
        </option>
        <option value="Bhubhneswar" display="flex" alignItems="center">
          Bhubhneswar
        </option>
        <option value="Vadodara" display="flex" alignItems="center">
          Vadodara
        </option>
        <option value="Raipur" display="flex" alignItems="center">
          Raipur
        </option>
        <option value="Nashik" display="flex" alignItems="center">
          Nashik
        </option>
        <option value="Hubli" display="flex" alignItems="center">
          Hubli
        </option>
        <option value="Calicut" display="flex" alignItems="center">
          Calicut
        </option>
        <option value="Udupi-Manipal" display="flex" alignItems="center">
          Udupi-Manipal
        </option>
        <option value="Trichy" display="flex" alignItems="center">
          Trichy
        </option>
        <option value="Madurai" display="flex" alignItems="center">
          Madurai
        </option>
      </Select>
    </Box>
  );
}
