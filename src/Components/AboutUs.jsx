import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Box>
      <Box bg="#ffffff" borderTop="1px solid rgba(0,0,0,0.12)">
        <Menu bg="#ffffff">
          <MenuButton
            color="#000000"
            opacity="0.54"
            bg="#ffffff"
            borderTop="1px solid rgba(0,0,0,0.12)"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            About Us
          </MenuButton>
          <MenuList>
            <MenuItem>Zoomcar Team</MenuItem>
            <MenuItem>Zoomcar Subscription</MenuItem>
            <MenuItem>Zoomcar Blog</MenuItem>
            <MenuItem>Careers @ Zoomcar</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box
        bg="#f5f5f5"
        borderTop="1px solid rgba(0,0,0,0.12)"
        pt="16"
        textAlign="start"
        pb="5"
      >
        <Box w="60%" m="auto">
          <Text
            lineHeight="1.5"
            fontSize="14px"
            color="#1f1f1f"
            fontWeight="bold"
            pb="2"
          >
            SELF DRIVE CARS IN PUNE
          </Text>
          <Text lineHeight="1.5" fontSize="12px" color="#1f1f1f">
            The cultural capital of Maharashtra, Pune was once home to the
            mighty Marathas, and retains their legacy in the many monuments it
            is home to, as well as the rich culture which is lovingly preserved
            by the people of the city. Pune is called the Oxford of the East and
            is fast emerging as the preferred destination for several
            multinational companies too. With opportunities for education, jobs
            and a vibrant nightlife, Pune attracts youngsters from all over the
            country.
          </Text>
          <Text lineHeight="1.5" fontSize="12px" color="#1f1f1f">
            These money-savvy youngsters seek the convenience of self-drive cars
            without the liability of buying and owning one. Zoomcar fills this
            need with a well-maintained fleet of cars from every segment. Choose
            a Zoomcar self-drive car rental in Pune and experience the
            convenience it provides.
          </Text>
        </Box>
        <br />
        <Box w="60%" m="auto">
          <Text
            lineHeight="1.5"
            fontSize="14px"
            color="#1f1f1f"
            fontWeight="bold"
            pb="2"
          >
            SELF DRIVE CAR ON RENT IN PUNE
          </Text>
          <Text lineHeight="1.5" fontSize="12px" color="#1f1f1f">
            Besides a range of cars to choose from, Zoomcar also offers its
            users a choice of flexible tariff plans. Pick a plan keeping in mind
            your requirement to make the most of every booking. If you are
            looking for a vehicle to commute to work or college, the Zoom
            commute is the right plan for you. Travel alone, or carpool with
            your friends, sharing the cost of rental for maximum savings. Pune
            is central to several tourist destinations, the most popular among
            which are Lonavla and Khandala. Make every weekend fun with a
            self-drive car rental to a new destination. Zoomcar not only ensures
            freedom safety and privacy but also comes with features which are
            designed to ensure a hassle free ride.
          </Text>
        </Box>
        <br />
        <Box w="60%" m="auto">
          <Text
            lineHeight="1.5"
            fontSize="14px"
            color="#1f1f1f"
            fontWeight="bold"
            pb="2"
          >
            CAR RENTAL IN PUNE
          </Text>
          <Text lineHeight="1.5" fontSize="12px" color="#1f1f1f">
            For frequent travelers shuttling between Pune to Mumbai on a regular
            basis, taking a car for rent in Pune is ideal as they have the
            convenience of embarking on the journey at any time of the day. The
            well maintained Mumbai-Pune expressway is a pleasure to drive on.
            For those visiting the temple town of Shirdi from Pune, a rental car
            would be more reasonable and convenient when compared to a chauffeur
            driven car as the queues at the temples are unpredictable. It is a
            4-hour drive from Pune to Shirdi.
          </Text>
        </Box>
        <br />
        <Box w="60%" m="auto">
          <Text
            lineHeight="1.5"
            fontSize="14px"
            color="#1f1f1f"
            fontWeight="bold"
            pb="2"
          >
            ABOUT ZOOMCAR
          </Text>
          <Text lineHeight="1.5" fontSize="12px" color="#1f1f1f">
            No more worries about petrol mileage, insurance, and car breakdowns!
            Zoomcar has enabled driving convenience for travellers around the
            country and is fast expanding its reach to cities including
            Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR,
            Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai,
            Mysore, Pune, Siliguri and Vizag. Self drive cars from Zoomcar have
            given customers more control, privacy, and freedom. Book a self
            drive car in any city you visit with the Zoomcar app on your phone
            and feel at home wherever you go.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
