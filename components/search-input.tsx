import { Input } from '@nextui-org/input'
import { Kbd } from '@nextui-org/kbd'
import { SearchIcon } from './icons'

type SearchInputProps = {
  baseClassName?: string
  placeholder?: string
}

export const SearchInput = (SearchInputProps: SearchInputProps) => {
  return (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
        base: SearchInputProps.baseClassName,
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['enter']}>
          Enter
        </Kbd>
      }
      labelPlacement="outside"
      placeholder={SearchInputProps.placeholder || 'Search...'}
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      autoFocus
    />
  )
}
