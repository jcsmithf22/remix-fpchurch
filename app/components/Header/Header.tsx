import * as React from "react";
import { Link } from "@remix-run/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

// I need an array of navigation objects structured as follows.
// The first main link item is About us, which is a dropdown with the following items: beliefs, denomination, and confession.
// The second main link item one is a link to the sermons page. This does not have a dropdown

// create a type for each navigation item

type NavigationItem = {
  name: string;
  link?: string;
  dropdown?: {
    name: string;
    link: string;
  }[];
};

type NavigationList = NavigationItem[];

const navigation: NavigationList = [
  {
    name: "About us",
    dropdown: [
      {
        name: "What We Believe",
        link: "/beliefs",
      },
      {
        name: "Denomination",
        link: "/denomination",
      },
      {
        name: "Confession of Faith",
        link: "/confession",
      },
    ],
  },
  {
    name: "Sermons",
    link: "/sermons",
  },
  {
    name: "Psalm Singing",
    link: "/psalms",
  },
  {
    name: "Visit",
    dropdown: [
      {
        name: "Location and Service Times",
        link: "/location",
      },
      {
        name: "What to Expect",
        link: "/expectations",
      },
      {
        name: "Confession of Faith",
        link: "/confession",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <header>
      <Heading />
      <Navigation />
    </header>
  );
};

const Heading = () => {
  return (
    <div className="w-full bg-blue-950 text-blue-50 p-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="font-serif text-xl tracking-tight">
          <span className="text-2xl">F</span>REE{" "}
          <span className="text-2xl">P</span>RESBYTERIAN{" "}
          <span className="text-2xl">C</span>HURCH <span className="italic text-2xl">of</span>{" "}
          <span className="text-2xl">S</span>COTLAND
        </h1>
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <NavigationMenu.Root className="w-full bg-blue-800">
      <NavigationMenu.List className="flex flex-row gap-x-2 py-4 items-baseline text-blue-50 mx-auto max-w-7xl px-6 lg:px-8">
        {navigation.map((item, index) => (
          <NavigationMenuItem key={index} item={item} />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

const NavigationMenuItem = ({ item }: { item: NavigationItem }) => {
  return (
    <NavigationMenu.Item className="relative">
      {item.dropdown ? (
        <>
          <NavigationMenu.Trigger
            className="group flex flex-row gap-x-2 items-center p-2 px-3 hover:bg-blue-900 rounded-lg"
            // onPointerMove={(event) => event.preventDefault()}
            // onPointerLeave={(event) => event.preventDefault()}
          >
            {item.name}
            <CaretDownIcon
              className="transition-transform duration-150 group-data-[state=open]:-rotate-180"
              width={20}
              height={20}
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="top-16 -left-2 p-2 min-w-full w-max absolute bg-blue-800 shadow-lg rounded-lg data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut">
            <ul className="flex flex-col">
              {item.dropdown.map((subitem, subindex) => (
                <li key={subindex}>
                  <LinkItem to={subitem.link}>{subitem.name}</LinkItem>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </>
      ) : (
        item.link && (
          <LinkItem className="" to={item.link}>
            {item.name}
          </LinkItem>
        )
      )}
    </NavigationMenu.Item>
  );
};

type LinkItemProps = React.ComponentPropsWithRef<"a"> & {
  to: string;
};

const LinkItem = React.forwardRef<HTMLAnchorElement, LinkItemProps>(
  ({ className, children, to, ...props }, forwardedRef) => (
    <NavigationMenu.Link asChild>
      <Link
        className={clsx(
          "p-2 px-3 hover:bg-blue-900 block rounded-lg",
          className
        )}
        to={to}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </Link>
    </NavigationMenu.Link>
  )
);

LinkItem.displayName = "LinkItem";

export default Header;
